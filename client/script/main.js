window.addEventListener("DOMContentLoaded",  function(){
    // 브라우저야, HTML 다 읽어들이고 나서~ JS 실행해줘! (css는 상관 x)
    // 개발자 : 알고 있음
    // 브라주어 : 뭘 어떻게 하는지 모르는 상태
    // 자바스크립트라는 언어로, 브라우저에게 언제 어느때 무엇을 어떻게 해줘야할지를 설명하면 됨
    

    // 누가
    const loadBtn = document.querySelector("#load_btn");
    const usersTbl = this.document.querySelector("#users_tbl")
    // 할일
    loadBtn.addEventListener("click", function(){
        loadBtn.disabled = false;
        // 데이터 수신(=data fetching)
        const result = fetch("http://localhost:3000/getAllUsers").then((res) => res.json()).then((data) => {
            // console.log(date);
            data.forEach((el) => {
                // console.log(el, i);
                const row = document.createElement("tr"); // tr 태그 생성
                row.innerHTML = `
                    <td>${el.id}</td>
                    <td>${el.name}</td>
                    <td>${el.email}</td>
                    <td>${el.reg_date}</td>
                    <td>${el.sns}</td>
                    <td>${el.intro}</td>
                `;
                usersTbl.appendChild(row);
            });
        });
        loadBtn.disabled = true; // 한번 클릭한 이후엔 더이상 클릭할 수 없게 disabled로 처리
    })
});