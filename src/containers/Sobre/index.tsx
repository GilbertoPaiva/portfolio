import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad unde, esse
      voluptas sequi corporis, nesciunt cupiditate dolores illum enim
      reprehenderit officiis minima blanditiis. Provident, culpa! Sapiente odio
      praesentium optio corporis!
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats-sigma-five.vercel.app/api?username=GilbertoPaiva&show_icons=true&theme=dracula"
        alt="GitHub stats"
      />
      <img
        src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=GilbertoPaiva&layout=compact&theme=dracula"
        alt="Top languages"
      />
    </GithubSecao>
  </section>
)

export default Sobre
