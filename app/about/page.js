export default function About() {
  return (
    <div>
      <h4 className='title'>나의 소개</h4>
      <div className='title-sub'>
        <p>이름 : 장재원</p>
        <p>출생 : 2001년</p>
        <p>MBTI : ISFP</p>
        <p></p>
      </div>

      <footer>
        <nav>
          <a href='https://jjwpr.tistory.com/manage' target='_blank'>
            Blog
          </a>{" "}
          |
          <a href='https://github.com/dodo4421' target='_blank'>
            Github
          </a>
        </nav>
        <p>
          <span>저자 : JaeWon Jang</span>
          <br />
          <span>이메일 : dodo4421@naver.com</span>
          <br />
          <span>Copyright 2023. cocoder. All Rights Reserved.</span>
        </p>
      </footer>
    </div>
  )
}
