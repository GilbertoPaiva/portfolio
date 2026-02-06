import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'
type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
}

const Projetos = () => {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    fetch(
      'https://api.github.com/users/GilbertoPaiva/repos?sort=updated&per_page=12'
    )
      .then((res) => res.json())
      .then((data: Repo[]) => setRepos(data))
      .catch(() => setRepos([]))
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Projeto
              titulo={repo.name}
              descricao={repo.description || 'Projeto sem descrição'}
              url={repo.html_url}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
