function checkCode() {
    const code = document.getElementById("code").value;
    const error = document.getElementById("error");

    // 先輩ごとの4桁コードと画像URL
    const pages = {
        "1234": "images/messageA.jpg",
        "5678": "images/messageB.jpg",
        "9012": "images/messageC.jpg"
    };

    if (pages[code]) {
        // 正解 → 画像ページへ移動
        window.location.href = pages[code];
    } else {
        // 不正解
        error.textContent = "パスコードが違います";
    }
}
