export default function Home() {
  return (
    <div>
      <div>
        <h4 className='title'>재원 블로그</h4>
        <p className='title-sub'>by dev jang</p>
        <p className='title-sub'>testing website with NextJs13</p>
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
