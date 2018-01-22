
    //create XMLHttpRequest
    var req = new XMLHttpRequest();
    // By async, open Request
    req.open('GET', 'data/contents.json');
    // send Request
    req.send();

    req.onreadystatechange = function () {
      // 서버 정상 응답
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          console.log(req.responseText);
          // Deserializing (String > Object)
          responseObject = JSON.parse(req.responseText);
          // JSON object > HTML String
          let shareKimContent = '';
            shareKimContent +=
            `<div class="section-inner">
                 <h1 class="readable-hidden">ShareKim content section</h1>
                   <ul>
                      ${responseObject.map((tour,i) =>
                        `<li class="row">
                          <p class= ${responseObject[i].size}>
                            <a href=${responseObject[i].url} title="shareKim-url">
                              <figure>
                                  <img src=${responseObject[i].img} alt="sharKimImg">
                                  <figcaption>
                                    <h2>${responseObject[i].title}</h2>
                                    <p>${responseObject[i].desc}</p>
                                  </figcaption>
                              </figure>
                            </a>
                          </p>
                        </li>`
                        ).join('')}
                   </ul>
             </div>`;
           // jquery append
           $('#content').append(shareKimContent);
           /* pure js
            document.getElementById('content').innerHTML = shareKimCont; */
      } else {
        console.error(req.status + ':' + req.statusText);
      }
  }
};