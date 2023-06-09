export default function Contact() {
  return (
    <div>
      <div className='container'>
        <h3 className='title'>연락처</h3>
        <hr />
        <form>
          <label>
            <span>이름</span>
            <input type='text' placeholder='홍길동' />
          </label>

          <label>
            <span>이메일</span>
            <input type='email' placeholder='dodo4421@naver.com' />
          </label>

          <label>
            <span>세부사항</span>
            <textarea placeholder='메세지를 남겨주세요'></textarea>
          </label>

          <label>
            <span>
              <input type='submit' value='submit' />
            </span>
          </label>
        </form>
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
