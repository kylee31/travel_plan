import Button from "@/components/common/Button";
import { useSearchWordStore } from "@/services/states/stores";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import {
  useIsClick,
  useIsLogInModalStore,
  useIsLogInStore,
} from "@/services/states/loginStores";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const { searchWord, setSearchWord } = useSearchWordStore();
  //로그인 처리 상태관리
  const { isLogIn } = useIsLogInStore();
  const { isLogInModal, setIsLogInModal } = useIsLogInModalStore();
  const { isClick, setIsClick } = useIsClick();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    setSearchWord(inputValue);
    handleClick();
    if (inputValue === "") {
      setSearchWord("대한민국");
      handleClick();
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleLogin = () => {
    setIsLogInModal(true);
  };

  //검색 기록이 변경되지 않도록 구현 => 탭 off 설정 후 검색어 입력하면 이전 추천장소가 남아있고 새로 입력한 검색어의 추천장소로 바뀌지 않게 됨.
  //이 상태에서 enter 또는 버튼 클릭 시 동일한 단어이므로 RecommendTable 컴포넌트가 리렌더링 되지 않음.
  //리렌더링할 수 있도록 버튼 또는 enter클릭마다 boolean 값이 변경되도록 코드 구현.
  //해당 boolean값(isClick)을 Re~컴포넌트 useEffect의 의존배열값으로 주어 변경가능하도록 구현
  const handleClick = () => {
    //동일 단어이더라도 버튼이나 엔터 클릭시 리렌더링할 수 있도록 boolean값 toggle 설정
    isClick ? setIsClick(false) : setIsClick(true);
  };

  return (
    <>
      <Box>
        <LContainer>
          <Image
            src="/imgs/logo.png"
            alt="logo"
            priority
            width={400}
            height={43}
          />
          <InputSet>
            <InputBox
              placeholder="서울"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            {/*Image 컴포넌트에서 fill 속성 사용시 sizes 속성 필수*/}
            <AirPlaneBtn onClick={handleSubmit}>
              <Image
                src="/imgs/airport.png"
                alt="airport"
                fill
                sizes="(max-width: 1200px) 100vw"
                loading="lazy"
              />
            </AirPlaneBtn>
          </InputSet>
        </LContainer>
        <RContainer>
          <Button wid={6} onClick={handleLogin}>
            {isLogIn ? `로그아웃` : `로그인`}
          </Button>
        </RContainer>
      </Box>
      {isLogInModal && <Modal />}
    </>
  );
}
const Box = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  height: 4rem;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  padding: 0.8rem 0;
`;

const LContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
`;
const RContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 1rem;
`;

const InputSet = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  height: 100%;
  &:focus {
    color: transparent;
  }
`;

const InputBox = styled.input`
  width: 12.5rem;
  height: 100%;
  border: 1.5px solid black;
  padding-left: 0.5rem;
  margin-right: 0.7rem;
  font-size: ${(props) => props.theme.size.small};
`;

const AirPlaneBtn = styled.button`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  border: 1.5px solid black;
  background-color: ${(props) => props.theme.colors.white};
  &:hover {
    cursor: pointer;
  }
`;

/*
//useRef 사용 방식

export default function Header() {
  //const [inputValue, setInputValue] = useState("");
  const { searchWord, setSearchWord } = useSearchWordStore();
  //로그인 처리 상태관리
  const { isLogIn } = useIsLogInStore();
  const { isLogInModal, setIsLogInModal } = useIsLogInModalStore();
  const { isClick, setIsClick } = useIsClick();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.value = e.target.value;
    }
    console.log(e.target.value);
  };

  const handleSubmit = async () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      setSearchWord(inputValue);
      handleClick();
      if (inputValue === "") {
        setSearchWord("대한민국");
        handleClick();
      }
    }
  };

  return (
    <>
      <Box>
        <LContainer>
          <Image
            src="/imgs/logo.png"
            alt="logo"
            priority
            width={400}
            height={43}
          />
          <InputSet>
            <InputBox
              placeholder="서울"
              ref={inputRef}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <AirPlaneBtn onClick={handleSubmit}>
              <Image
                src="/imgs/airport.png"
                alt="airport"
                fill
                sizes="(max-width: 1200px) 100vw"
                loading="lazy"
              />
            </AirPlaneBtn>
          </InputSet>
        </LContainer>
        <RContainer>
          <Button wid={6} onClick={handleLogin}>
            {isLogIn ? `로그아웃` : `로그인`}
          </Button>
        </RContainer>
      </Box>
      {isLogInModal && <Modal />}
    </>
  );
}
*/
