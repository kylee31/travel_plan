import { useIsLogInModalStore } from "@/services/states/loginStores";
import {} from "@/services/states/stores";
import Image from "next/image";
import styled from "styled-components";

export default function Modal() {
  const { setIsLogInModal } = useIsLogInModalStore();

  const handleModal = () => {
    setIsLogInModal(false);
  };

  const handleLogin = () => {
    // console.log("google login");
    window.confirm("updating👩‍💻");
  };

  //로그인 토큰 관리
  return (
    <Container>
      <ModalBox>
        <Bar>
          <Btn>
            <XButton onClick={handleModal}>
              <Image src="/imgs/xlogo.png" alt="" width={20} height={18} />
            </XButton>
          </Btn>
          <Box>
            <div style={{ marginBottom: "2rem" }}>WELCOME!</div>
            <Image src="/imgs/travel.png" alt="" width={100} height={100} />
          </Box>
        </Bar>
        <LogInBox>
          소셜 계정으로 로그인
          {/* 임시 로그인 스타일 */}
          <Account>
            <Image
              src="/imgs/google.png"
              alt="google"
              width={40}
              height={40}
              onClick={handleLogin}
            />
          </Account>
        </LogInBox>
      </ModalBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 75%;
  background-color: white;
  z-index: 30;
`;

const Bar = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.middlegray};
  padding: 1rem;
  font-size: ${(props) => props.theme.size.semilarge};
  font-weight: ${(props) => props.theme.weight.bold};
`;

const Btn = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

const XButton = styled.div`
  width: 1rem;
  height: 1rem;
  font-size: ${(props) => props.theme.size.small};
  &:hover {
    cursor: pointer;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const LogInBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: ${(props) => props.theme.size.semilarge};
  font-weight: ${(props) => props.theme.weight.bold};
`;

const Account = styled.div`
  width: 4rem;
  height:4rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightgray};
  border:2px solid lightgray;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    cursor:pointer;
  }
}}`;
