const sampleData = {
  postingList: [
    {
      purchaseGuide: '에어프라이어 추천 2023',
      recommendations: [
        {
          name: '1. 필립스 에센셜 디지털 대용량 에어프라이어',
          image:
            'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3329/8947d801c82b80f85862a531f6fffeae0704e0213a00d5dabc209db2d224.jpg',
          link: 'https://www.coupang.com/vp/products/6241433858?itemId=12600461563&src=1139000&spec=10799999&addtag=460&ctag=6241433858&lptag=AF4793821&itime=20230709155208&pageType=MLSDP&pageValue=6241433858&wPcid=15025292592897736210036&wRef=proguide.co.kr&wTime=20230709155208&redirect=landing&traceid=V0-101-81af464f7eca5ff4&mcid=a1cbf730eb0c456d88b5329c6688836d&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=proguide&impressionid=&campaigntype=&requestid=&contentkeyword=&subparam=&isAddedCart=',
          explanation: [
            '4~5인분에 딱 맞는 사이즈인 4.2L 용량의 필립스 에어프라이어 제품으로 튀기기/ 굽기/ 로스팅/ 베이킹/ 데우기 등 다양한 요리가 가능합니다',
            '모던한 디자인과 블랙 컬러로 어떤 주방 인테리어에도 잘 어울리며 강력한 공기 순환으로 겉은 바싹하고 속은 촉촉한 요리를 즐길 수 있다고 합니다',
            '평평한 바닥보다 40% 더 강력하게 열풍을 순환시켜 주는 회오리판 바닥과 지방을 최대로 줄여 주기 때문에 더욱 담백하고 건강한 요리가 가능합니다',
            '스마트 터치스크린과 직관적인 아이콘을 통해  누구나 쉽게 사용이 가능하며 사용자의 안전을 위해 자동 꺼짐 기능이 탑재되어 있습니다',
          ],
          pros: ['적은 소음', '간편한 사용법'],
          cons: ['설명서가 부실하다는 후기', '호불호 있는 터치 디스플레이'],
          etc: {
            가격대: '13만원 대',
            용량: '4.2L',
            조작부: '터치/디지털 디스플레이',
          },
        },
        {
          name: '2. 매직쉐프 쿡메이드 7.7L 에어프라이어',
          image:
            'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/37e9/09dbf5e1b822228514c6dfe2293760288b2cb9ddf13495562c0361f7c9d1.jpg',
          link: 'https://www.coupang.com/vp/products/4604773989?itemId=5684030421&src=1139000&spec=10799999&addtag=460&ctag=4604773989&lptag=AF4793821&itime=20230709155458&pageType=MLSDP&pageValue=4604773989&wPcid=15025292592897736210036&wRef=proguide.co.kr&wTime=20230709155458&redirect=landing&traceid=V0-101-d750bc737c8efc2c&mcid=54bccdf4a3574b02a8bc5b6aa7c92219&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=proguide&impressionid=&campaigntype=&requestid=&contentkeyword=&subparam=&isAddedCart=',
          explanation: [
            '매직 쉐프 쿡 메이드 7.7L 에어프라이어는 열기를 순환시켜 위아래는 물론 360도로 순환하여 음식을 고르게 익혀 빠른 조리를 할 수 있습니다',
            '저소음 모드가 탑재되어 있으며 최대 60분까지 시간 조절이 가능하며 최소 80도에서 최대 200도로 다양한 요리가 가능한 에어프라이어 추천 제품입니다',
            '바스켓형 에어프라이어의 단점은 조리과정을 보려면 바스켓을 꺼내야 되는데 이 제품은 내부가 보이는 창이 있어서 조리과정을 확인할 수 있어 만족스럽다는 후기가 있습니다',
          ],
          pros: ['높은 가성비', '넉넉한 용량'],
          cons: ['소음에 대한 불만 후기가 있다', '가격 변동이 있는 편'],
          etc: {
            가격대: '16만원 대',
            용량: '7.7L',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const posting = sampleData.postingList[0];
  const { purchaseGuide, recommendations } = posting;
  return (
    <>
      <h1>{purchaseGuide}</h1>
      {recommendations.map(
        ({ name, image, link, explanation, pros, cons, etc }) => (
          <>
            <h2>{name}</h2>
            <a href={link}>
              <img className="product__image" src={image} alt={name} />
            </a>
            <ul>
              {explanation.map((exp) => (
                <li>{exp}</li>
              ))}
            </ul>
            <section>
              <div>
                <h4>장점</h4>
                <ul>
                  {pros.map((pro) => (
                    <li>{pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>단점</h4>
                <ul>
                  {cons.map((con) => (
                    <li>{con}</li>
                  ))}
                </ul>
              </div>
            </section>
            <h4>제품 상세표</h4>
            <table>
              <tbody>
                {Object.entries(etc).map(([key, value]) => (
                  <tr>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ),
      )}
    </>
  );
}
