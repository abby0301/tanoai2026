function checkCode() {
    const code = document.getElementById("code").value;
    const error = document.getElementById("error");

    // 先輩ごとの4桁コードと画像URL
    const pages = {
        "1234": "image/messageA.jpg",
        "5678": "image/messageB.jpg",
        "9012": "image/messageC.jpg"
    };

    if (pages[code]) {
        // 正解 → 画像ページへ移動
        window.location.href = pages[code];
    } else {
        // 不正解
        error.textContent = "パスコードが違います";
    }
}
