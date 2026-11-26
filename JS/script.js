
const API_URL = "https://api4.binance.com/api/v3/ticker/24hr";

const coinList = document.getElementById("coin-list");
const searchInput = document.getElementById("search-input");
const allTab = document.getElementById("all-tab");
const favoriteTab = document.getElementById("favorite-tab");
const updateTime = document.getElementById("update-time");

let coins = [];
let currentTab = "all";
let isFetching = false;

// 관심 코인 불러오기
let favorites = [];

try {
    favorites = JSON.parse(
        localStorage.getItem("steelFavorites")
    ) || [];
} catch (error) {
    favorites = [];
}

// 가격 표시
function formatPrice(price) {
    return Number(price).toLocaleString("en-US", {
        maximumFractionDigits: 8
    });
}

// 코인 목록 화면에 표시
function renderCoins() {
    const keyword = searchInput.value.trim().toUpperCase();

    let filteredCoins = coins.filter(coin =>
        coin.symbol.endsWith("USDT")
    );

    // 관심항목 필터
    if (currentTab === "favorite") {
        filteredCoins = filteredCoins.filter(coin =>
            favorites.includes(coin.symbol)
        );
    }

    // 검색 필터
    if (keyword) {
        filteredCoins = filteredCoins.filter(coin =>
            coin.symbol.toUpperCase().includes(keyword)
        );
    }

    if (filteredCoins.length === 0) {
        coinList.innerHTML = `
            <tr>
                <td colspan="4">검색 결과가 없습니다.</td>
            </tr>
        `;
        return;
    }

    coinList.innerHTML = filteredCoins.map(coin => {
        const isFavorite = favorites.includes(coin.symbol);
        const change = Number(coin.priceChangePercent);
        const changeClass = change >= 0 ? "positive" : "negative";
        const changeSign = change > 0 ? "+" : "";

        return `
            <tr>
                <td>
                    <button
                        class="favorite-btn ${isFavorite ? "active" : ""}"
                        data-symbol="${coin.symbol}"
                        title="관심 코인 등록"
                    >
                        ${isFavorite ? "★" : "☆"}
                    </button>
                </td>
                <td class="coin-name">${coin.symbol}</td>
                <td>${formatPrice(coin.lastPrice)}</td>
                <td class="${changeClass}">
                    ${changeSign}${change.toFixed(2)}%
                </td>
            </tr>
        `;
    }).join("");
}

// 바이낸스 API 데이터 가져오기
async function fetchCoins() {
    if (isFetching) return;

    isFetching = true;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("API 연결 실패");
        }

        const data = await response.json();

        coins = data.filter(coin =>
            coin.symbol.endsWith("USDT")
        );

        // 가격순 정렬
        coins.sort((a, b) =>
            Number(b.quoteVolume) - Number(a.quoteVolume)
        );

        renderCoins();

        updateTime.textContent =
            "마지막 업데이트: " + new Date().toLocaleTimeString();

    } catch (error) {
        console.error("데이터 가져오기 오류:", error);
        updateTime.textContent =
            "API 연결 오류 - 잠시 후 다시 시도합니다.";
    } finally {
        isFetching = false;
    }
}

// 관심 코인 등록 및 해제
coinList.addEventListener("click", function(event) {
    const button = event.target.closest(".favorite-btn");

    if (!button) return;

    const symbol = button.dataset.symbol;

    if (favorites.includes(symbol)) {
        favorites = favorites.filter(item => item !== symbol);
    } else {
        favorites.push(symbol);
    }

    localStorage.setItem(
        "steelFavorites",
        JSON.stringify(favorites)
    );

    renderCoins();
});

// 검색 기능
searchInput.addEventListener("input", renderCoins);

// 전체보기 탭
allTab.addEventListener("click", function() {
    currentTab = "all";

    allTab.classList.add("active");
    favoriteTab.classList.remove("active");

    renderCoins();
});

// 관심항목 탭
favoriteTab.addEventListener("click", function() {
    currentTab = "favorite";

    favoriteTab.classList.add("active");
    allTab.classList.remove("active");

    renderCoins();
});

// 최초 데이터 요청
fetchCoins();

// 1초마다 데이터 자동 업데이트
setInterval(fetchCoins, 1000);
