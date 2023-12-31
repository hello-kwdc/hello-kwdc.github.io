const Terms = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>후원 약관</title>
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
                <div class="title">KWDC 후원 약관</div>
                <div class="content">
                  <div class="sub-content">
                    <div class="sub-content-title">제1조 - 목적</div>
                    <div class="sub-content-body">
                      <ul>
                        <li>
                          본 약관은 후원사가 KWDC 행사(이하 “행사”)에 후원을 함에 있어 행사 홈페이지에 안내된 내용과 더불어 양 당사자 간 권리, 의무를 분명히 하는 것을 목적으로 합니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-content">
                    <div class="sub-content-title">
                      제2조 - 후원 신청 및 후원금 지급 방법
                    </div>
                    <div class="sub-content-body">
                      <ul>
                        <li>
                          후원사는 행사 후원 의사를 밝힌 후 계약을 체결한 날로부터 14일 이내에 후원 신청 금액을 커뮤니티 연합이 정한 계좌에 일시불로 지급해야 합니다. 단, 후원사가 지급 기한 연장에 대한 정당한 사유를 들어 연장을 신청한 경우 커뮤니티 연합은 해당 신청을 승인할 수 있습니다.
                        </li>
                        <li>
                          계약이 체결된 날 해당 후원의 구좌가 감소됩니다. 입금 기한이 지나 신청이 취소된 경우 잔여 구좌가 다시 증가됩니다.
                        </li>
                        <li>
                          후원 금액 지급일은 협의에 의해 조정할 수 있습니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-content">
                    <div class="sub-content-title">
                      제3조 - 후원 등급에 따른 커뮤니티 연합의 의무
                    </div>
                    <div class="sub-content-body">
                      <ul>
                        <li>
                          후원 금액 및 후원 서비스에 따른 후원 등급 및 각 후원 등급별 후원사에 대한 커뮤니티연합의 의무는 행사 홈페이지에 안내된 바와 같습니다. 단, 양 당사자의 합의에 따라 특약으로 행사 홈페이지에 안내된 내용과 다르게 약관을 작성할 수 있습니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-content">
                    <div class="sub-content-title">
                      제4조 - 후원 계약의 해지 및 후원 금액의 일부 취소
                    </div>
                    <div class="sub-content-body">
                      <ul>
                        <li>
                          후원사는 커뮤니티연합에게 다음 각 호의 기간에 따른 위약금을 지급하고 후원 계약을 해지할 수 있으며, 이미 후원금을 지급한 경우 커뮤니티연합은 위약금을 제외한 후원금을 반환합니다. 단, 후원 금액 중 일부를 취소하는 경우 취소를 요청한 금액에 다음 각 호에 따른 위약금 산정 비율이 적용됩니다. 후원 서비스 제공의 경우, 후원사의 상용 서비스의 금액을 기준으로 후원 금액을 산정하여 적용합니다.
                        </li>
                      </ul>
                      <div class="sub-content-boxes">
                        <div class="sub-content-box">
                          <div class="sub-content-box-text">
                            <b>행사 60일 전</b>
                            <p>후원 금액의 <b>100</b>%</p>
                          </div>
                        </div>
                        <div class="sub-content-box">
                          <div class="sub-content-box-text">
                            <b>행사 60일 전 ~ 45일 전</b>
                            <p>후원 금액의 <b>50</b>%</p>
                          </div>
                        </div>
                        <div class="sub-content-box">
                          <div class="sub-content-box-text">
                            <b>행사 45일 전 ~ 30일 전</b>
                            <p>후원 금액의 <b>30</b>%</p>
                          </div>
                        </div>
                        <div class="sub-content-box">
                          <div class="sub-content-box-text">
                            <b>행사 30일 전 ~ 행사 당일</b>
                            <p>후원 금액의 <b>0</b>%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sub-content">
                    <div class="sub-content-title">
                      제5조 - 행동강령 위반에 따른 후원 계약의 해지 및 손해배상
                    </div>
                    <div class="sub-content-body">
                      <ul>
                        <li>
                          후원사는 행사 홈페이지에 공개된 행동강령을 엄격하게 준수할
                          의무가 있습니다.
                        </li>
                        <li>
                          후원사는 후원 신청 시 후원 계약 신청 이전에 발생한 행동강령
                          위반사실 여부에 대해 고지할 의무가 있으며, <br />
                          커뮤니티연합 행동강령 위반사실을 이유로 후원 계약 체결을
                          거부할 수 있습니다.
                        </li>
                        <li>
                          후원사가 후원 계약 체결 이후 제1항에 따른 행동강령 준수 의무를
                          위반하거나 제2항에 따른 후원사의 고지의무 위반 사실이 발견된
                          경우 커뮤니티연합은 즉시 해당 사실을 후원사에게 통보하고
                          시정을 요청할 수 있습니다. <br />
                          이 경우 후원사는 24시간 내로 의견서를 제출할 수 있으며, 위반의
                          정도가 커뮤니티연합 및 행사의 운영에 중대한 지장을 미치는
                          경우, 해당 사유를 통보하고 후원 계약을 해지할 수 있습니다.
                          <br />
                          후원사는 모든 후원혜택을 제공받을 수 없으며 계약 해지 시점
                          이후 부스 운영을 포함한 일체의 행사에 참석할 수 없고
                          커뮤니티연합에 제4조 각 호의 기간에 따른 위약금을 지급해야
                          합니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-content">
                    <div class="sub-content-title">제6조 - 행사의 연기</div>
                    <div class="sub-content-body">
                      <ul>
                        <li>
                          커뮤니티연합이 행사를 연기하는 경우(연기 기한은 9월 18일까지로 합니다) 연기된 행사일 날짜를 기준으로 후원 계약의 내용이 변경됩니다. 이 경우 후원사는 후원 계약을 해지하거나 후원 금액 중 일부를 취소할 수 있으나, 연기된 행사일 날짜를 기준으로 제4조 각호의 기간을 적용하여 위약금 산정비율이 적용됩니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-content">
                    <div class="sub-content-title">
                      제7조 - 행사 취소에 따른 후원 계약의 해지 등
                    </div>
                    <div class="sub-content-body">
                      <ul>
                        <li>
                          행사가 취소되는 경우 커뮤니티연합이 후원사에게 행사 취소의
                          통지를 함으로써 후원 계약은 해지됩니다. <br />
                          이 경우 커뮤니티연합은 이미 지급받은 후원금 전액을 후원사에게
                          반환합니다.
                          <br />
                          <br />
                          단, 제3항 또는 제4항의 이유로 행사가 취소되는 경우는 예외로
                          합니다.
                        </li>
                        <ol type="1">
                          <li>
                            불가항력(정부의 행사 취소 명령 등)으로 행사가 취소되는 경우
                            커뮤니티연합은 후원사에게 다음 각 호의 행사 취소 시점에 따른
                            후원금의 일부를 반환합니다. <br />
                            단, 해당 사유가 불가항력으로 인정되지 않는 경우에는 제4항이
                            적용됩니다.
                          </li>
                          <li>
                            재난사정 (코로나19 등의 감염병 위기 경보 단계가 행사일까지
                            심각 이상으로 유지될 것이 예상되어 행사를 진행하기 어려운
                            경우로 판단되는 등)으로 커뮤니티연합이 행사를 취소하는 경우
                            후원사에게 다음 각 호의 행사 취소 시점에 따른 후원금의
                            일부를 반환합니다.
                          </li>
                        </ol>
                      </ul>
                      <div class="sub-content-boxes">
                        <div class="sub-content-box">
                          <div class="sub-content-box-text">
                            <b>행사 60일 전</b>
                            <p>후원 금액의 <b>100</b>%</p>
                          </div>
                        </div>
                        <div class="sub-content-box">
                          <div class="sub-content-box-text">
                            <b>행사 60일 전 ~ 30일 전</b>
                            <p>후원 금액의 <b>70</b>%</p>
                          </div>
                        </div>
                        <div class="sub-content-box">
                          <div class="sub-content-box-text">
                            <b>행사 30일 전 ~ 행사 당일</b>
                            <p>후원 금액의 <b>50</b>%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sub-content">
                    <div class="sub-content-title">제8조 - 기타</div>
                    <div class="sub-content-body">
                      <ul>
                        <li>
                          기타 약관에 포함되지 않은 사안에 대해서는 당사자간 합의에 따라
                          특약으로 정할 수 있으며, 약관의 동의는 후원사 신청서를 작성 및
                          발송함으로 갈음합니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-content">
                    <div class="sub-content-title">제9조 - 관할 법원</div>
                    <div class="sub-content-body">
                      <ul>
                        <li>
                          본 약관과 관련해 당사자간에 분쟁이 발생한 경우 상호 협의하여
                          원만히 해결하되, 소송으로 진행하는 경우 서울중앙지방법원을
                          관할 법원으로 합니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-content">
                    <div class="sub-content-body-bottom"></div>
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

export default Terms;
