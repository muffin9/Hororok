import Text from "../common/Text";

const PrivacySection = () => {
  return (
    <section>
      <header>
        <Text size="xLarge">
          안녕하세요! ‘카페콕’을 만드는 팀 호로록입니다.
        </Text>
        <Text size="medium">
          일정과 취향에 맞는 카페를 찾아드리는 만큼 저희에게 있어서 여러분의
          개인정보를 안전하게 처리하는 일은 가장 중요한 일 중에 하나입니다. 팀
          호로록이 처리하는 여러분의 개인정보는 서비스의 원활한 제공을 위하여
          여러분이 동의한 목적과 범위 내에서만 이용됩니다.
        </Text>
        <br />
        <Text size="medium">
          팀 호로록은 카페콕의 원활한 제공과 더욱 더 발전된 사용자 경험을 드리기
          위해 필요한 최소한의 개인정보를 수집합니다.
        </Text>
      </header>
      <div>
        <div>
          <Text size="large" weight="bold">
            1. 개인정보의 수집 및 이용목적
          </Text>
          <Text size="medium">
            팀 호로록은 수집한 개인정보를 다음의 목적을 위해 이용합니다.
          </Text>
          <table></table>
        </div>
        <div>
          <Text size="large" weight="bold">
            2. 수집하는 개인정보 항목
          </Text>
          <Text size="medium">
            팀 호로록은 회원가입, 서비스 이용 등을 위해 아래와 같은 개인정보를
            수집하고 있습니다.
          </Text>
          <table></table>
        </div>
        <div>
          <Text size="large" weight="bold">
            3. 개인정보 국내 처리 위탁 현황
          </Text>
          <Text size="medium">
            팀 호로록은 서비스의 원활한 제공을 위해 필요한 때에는 개인정보의
            처리를 일부 위탁하고 있습니다.
          </Text>
          <table></table>
        </div>
        <div>
          <Text size="large" weight="bold">
            4. 만 14세 미만 아동의 개인정보 처리
          </Text>
          <Text size="medium">
            팀 호로록은 법정대리인의 동의가 필요한 만14세 미만 아동에 대한
            정보를 수집 및 이용하지 않습니다. ###
          </Text>
        </div>
        <div>
          <Text size="large" weight="bold">
            5. 회원의 권리와 행사 방법
          </Text>
          <ul>
            <li>
              회원은 언제든지 로그인 후 계정 설정 메뉴를 통해 자신의 개인정보를
              조회하거나 수정할 수 있습니다.
            </li>
            <li>
              회원은 언제든지 회원 탈퇴를 통해 서비스 이용을 중단하고, 자신의
              개인정보를 파기할 수 있습니다.
            </li>
            <li>
              회원 탈퇴 시 회원의 개인정보는 즉시 파기되며, 복구할 수 없는
              방법으로 처리됩니다. 전자적 파일 형태의 정보는 기술적 방법을
              사용하여 완전히 삭제하고, 종이 문서에 기록된 정보는 분쇄하거나
              소각합니다.
            </li>
          </ul>
        </div>
        <div>
          <Text size="large" weight="bold">
            6. 개인정보처리방침의 변경에 관한 사항
          </Text>
          <Text size="medium">
            법률이나 서비스의 변경사항을 반영하기 위한 목적 등으로
            개인정보처리방침을 수정할 수 있습니다. 개인정보처리방침이 변경되는
            경우 회사는 변경사항을 게시하며, 변경된 개인정보처리방침은 게시한
            날로부터 7일 후부터 효력이 발생합니다.
          </Text>
          <Text size="medium">
            다만, 수집하는 개인정보의 항목, 이용목적의 변경 등과 같이 이용자
            권리의 중대한 변경이 발생할 때는 최소 30일 전에 미리
            알려드리겠습니다.
          </Text>
          <ul>
            <li>개인정보처리방침 변경 공고일자: 2024년 5월 1일</li>
            <li>개인정보처리방침 시행일자: 2024년 5월 8일</li>
          </ul>
        </div>
        <div>
          <Text size="large" weight="bold">
            7. 개인정보 보호책임자
          </Text>
          <ul>
            <li>개인정보 보호책임자: 박유진</li>
            <li>연락처: yjwhomakes.anko@gmail.com</li>
            <li>
              회원은 개인정보 처리와 관련된 불만처리 및 피해구제 등을 위해
              언제든지 개인정보 보호책임자에게 연락할 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
