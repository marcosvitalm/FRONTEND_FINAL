document.addEventListener("DOMContentLoaded", () => {
    const rankingBody = document.getElementById("ranking-body");

    fetch("/ranking")
        .then((response) => response.json())
        .then((data) => {
            rankingBody.innerHTML = data
                .map(
                    (player, index) =>
                        `<tr>
                            <td>${index + 1}</td>
                            <td>${player.name}</td>
                            <td>${player.score}</td>
                        </tr>`
                )
                .join("");
        });
});