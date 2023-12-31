const Conduct = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>행동 강령</title>
          </head>
        <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100vw;
          margin: 0;
          background-color: #292929;
          overflow: hidden;
        }
        
        .kwdc-body {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        
        img {
          position: absolute;
          max-width: 1400px;
          width: 95%;
          height: 95%;
          object-fit: contain;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .kwdc-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          color: #fff;
          font-size: 40px;
          font-weight: 700;
          padding: 20px;
          z-index: 99;
        }
        
        .kwdc-logo {
          margin-left: 20px;
        }
        
        .nav-bar {
          display: flex;
          margin-right: 20px;
        }
        
        .nav-bar {
          cursor: pointer;
        }
        
        .nav-bar > div:first-child {
          margin-right: 45px;
        }
        
        .active {
          color: #838383;
        }
        
        .contents {
          width: 100%;
          margin: 20px;
          padding-bottom: 20px;
        }
        .contents > div {
          margin: 0 30px;
        }
        
        .contents > .title {
          font-size: 64px;
          font-weight: 700;
          color: #fff;
        }
        
        .contents > .sub-title {
          color: #838383;
          font-size: 50px;
          font-weight: 700;
        }
        
        .content {
          color: #fff;
          overflow-y: scroll;
          height: calc(100vh - 200px);
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        
        .content::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
        
        .sub-content-body {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        
        .sub-content-body::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
        
        .content li {
          margin: 30px 0;
          margin-left: -20px;
        }
        
        .content ul li::marker {
          color: #f1d34a;
        }
        
        .content ol li::marker {
          color: white;
        }
        
        .sub-content {
          margin: 25px 0;
        }
        
        .sub-content-title {
          font-size: 28px;
          font-weight: 700;
          margin-top: 48px;
        }
        
        .sub-content-body {
          font-size: 17px;
          border: 1px;
          border-radius: 7px;
          background-color: rgba( 255, 255, 255, 0.1 );
          margin-top: 20px;
          padding: 10px;
        }
        
        .sub-content-body-bottom {
          margin-bottom: 80px;
        }
        
        .sub-content-boxes {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        
        .sub-content-box {
          border: 1px solid white;
          border-radius: 7px;
          display: inline-block;
          width: 23%;
          height: 90px;
          margin: 10px;
        }
        
        .sub-content-box-text {
          margin-top: 25px;
          text-align: center;
          font-size: 18px;
        }
        
        .sub-content-box-text p {
          font-size: 14px;
          margin: 0%;
        }
        
        .sub-content-box-text b {
          font-size: 15px;
        }
        
        .sub-content-box-text p b {
          font-weight: bold;
          font-size: 14px;
        }
        
        .sub-content-body li {
          margin: 20px 0;
          margin-left: -5px;
          margin-right: 10px;
        }
        
        
        @media (max-width: 767px) {
          img {
            content: url("./images/forMobile2.jpg");
            object-fit: contain;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
          }
          .kwdc-body {
          }
          .kwdc-header {
            font-size: 20px;
            padding: 10px;
          }
        
          .content > ul > li {
            font-size: 20px;
          }
        
          .contents > .title {
            font-size: 48px;
          }
        
          .contents > .sub-title {
            font-size: 32px;
            font-weight: 700;
          }
        
          .sub-content-title {
            font-size: 25px;
          }
          .sub-content-body {
            font-size: 18px;
          }
          .sub-content-boxes {
            flex-direction: column;
          }
          .sub-content-box {
            width: 90%;
          }
        
          .sub-content-body li {
            margin-right: 30px;
          }
        }
        
        </style>
          <body>
            <div class="kwdc-body">
              <div class="contents">
                <div class="title">KWDC 행동 강령</div>
                <div class="sub-title">Code of Conduct</div>
                <div class="content" style="overflow-y: auto">
                  <div class="sub-content-body" style="overflow-y: scroll">
                    <ul>
                      <li>
                        KWDC는 모든 참가자가 안전하고 즐거운 경험을 할 수 있도록,
                        다양성을 존중하고 괴롭힘 없는 환경을 제공하기 위해 최선을 다하고
                        있습니다.
                      </li>
                      <li>
                        모든 참가자는 성별, 성 정체성, 연령, 성적 취향, 장애, 외모, 신체
                        크기, 인종, 민족, 종교 또는 기타 특성과 관계없이 환영받을 권리가
                        있습니다.
                      </li>
                      <li>
                        모든 참가자는 지식 재산권과 개인 정보를 존중받을 권리가
                        있습니다. <br />
                        지식 재산권을 위배하거나 개인 정보를 침해하는 콘텐츠는 KWDC에서
                        사용이 제한됩니다.
                      </li>
                      <li>
                        모든 참가자는 서로를 존중하고 상호작용할 때 정중함을
                        지켜주시기를 부탁드립니다. 부적절한 컨텐츠는 가져오지
                        말아주세요.
                      </li>
                      <li>모든 참가자는 안전 표지판, 지침 및 규칙을 따라야 합니다.</li>
                      <li>
                        만약 행동 강령을 위반하는 문제가 발생하면, 준비위원회는 유연한
                        조치를 취하여 상황을 해결하겠습니다. <br />
                        하지만 위험한 행동이나 악의적인 의도가 있는 참가자는 KWDC 입장을
                        거부하거나 참가자를 제외시킬 수 있습니다.
                      </li>
                      <li>
                        모든 참가자는 이 행동 강령을 따르며, 언제든지 준비위원회에
                        문의하여 도움을 요청할 수 있습니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
        
        <script src="main.js"></script>
        `,
      }}
    ></div>
  );
};

export default Conduct;
