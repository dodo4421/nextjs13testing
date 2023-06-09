import Link from "next/link"

export default function Port2() {
  return (
    <div>
      <h2 className='title'>웹프로그래밍</h2>
      <h4 className='title'> 제작 웹사이트 및 레포지토리 목록</h4>
      <div className='title-sub'>
        <Link href='https://github.com/dodo4421'>깃허브 주소</Link>
      </div>
      <div className='container'>
        <a href='https://webdemo-jjw.netlify.app/'>
          <img src='/link0.jpg' className='img-web'></img>
        </a>
        <p>첫번째 포트폴리오</p>
      </div>
      <div className='container'>
        <a href='https://webdemo-jjw.netlify.app/'>
          <img src='/link1.jpg' className='img-web'></img>
        </a>
        <p>두번째 포트폴리오</p>
      </div>
      <div className='container'>
        <a href='https://webdemo-jjw.netlify.app/'>
          <img src='/link2.jpg' className='img-web'></img>
        </a>
        <p>세번째 포트폴리오</p>
      </div>
      <div className='container'>
        <a href='https://webdemo-jjw.netlify.app/'>
          <img src='/link3.jpg' className='img-web'></img>
        </a>
        <p>네번째 포트폴리오</p>
      </div>
    </div>
  )
}
