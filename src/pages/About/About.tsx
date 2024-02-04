import Test from '@/assets/test.svg'
import Cat from '@/assets/cat.jpg'

const About = () => {

  // if(__PLATFROM__ === 'desktop') {
  //   return <div>desktop</div>
  // }

  // if(__PLATFROM__ === 'mobile') {
  //   return <div>mobile</div>
  // }
  

  return (
    <>
      <h1>About</h1>
      <h2>PLATFROM={__PLATFROM__}</h2>
      <Test fill='red' />
      <img src={Cat} />
    </>
  )
}

export default About
