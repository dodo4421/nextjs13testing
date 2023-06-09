export default function Port2() {
  let 상품 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  return (
    <div>
      <h2 className='title'>서버구축</h2>
      <h4 className='title'> 목록</h4>
      {상품.map((a, i) => {
        return (
          <div className='food' key={i}>
            <img src={"/se" + i + ".png"} className='food-img' />
            <h4>{a}</h4>
          </div>
        )
      })}
    </div>
  )
}
