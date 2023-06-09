export default function Port() {
  let 상품 = ["보안자료구조", "서버구축", "객체지향프로그래밍", "웹프로그래밍"]

  return (
    <div>
      <h4 className='title'> 목록</h4>
      {상품.map((a, i) => {
        return (
          <div className='food' key={i}>
            <img src={"/jun" + i + ".png"} className='food-img' />
            <h4>{a}</h4>
          </div>
        )
      })}
    </div>
  )
}
