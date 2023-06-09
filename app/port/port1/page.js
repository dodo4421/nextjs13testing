export default function Port1() {
  let 상품 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  return (
    <div>
      <h2 className='title'>보안자료구조</h2>
      <h4 className='title'> 목록</h4>
      {상품.map((a, i) => {
        return (
          <div className='food' key={i}>
            <img src={"/bo" + i + ".png"} className='food-img' />
            <h4>{a}</h4>
          </div>
        )
      })}
    </div>
  )
}
