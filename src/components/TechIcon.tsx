import { 
  SiRubyonrails,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiPostgresql,
  SiMysql,
  SiAmazon,
  SiRedis,
  SiRuby,
  SiGit,
  SiNginx,
  SiTailwindcss
} from 'react-icons/si'
import { TbCode, TbApi } from 'react-icons/tb'

type TechIconProps = {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = "w-5 h-5" }: TechIconProps) {
  const icons: { [key: string]: JSX.Element } = {
    'Ruby on Rails': <SiRubyonrails className={`${className} text-red-500`} />,
    'JavaScript': <SiJavascript className={`${className} text-yellow-400`} />,
    'React': <SiReact className={`${className} text-cyan-400`} />,
    'PostgreSQL': <SiPostgresql className={`${className} text-blue-400`} />,
    'MySQL': <SiMysql className={`${className} text-blue-500`} />,
    'AWS': <SiAmazon className={`${className} text-orange-400`} />,
    'Redis': <SiRedis className={`${className} text-red-600`} />,
    'Sidekiq': <TbCode className={`${className} text-red-500`} />,
    'REST APIs': <TbApi className={`${className} text-green-400`} />,
    'Git': <SiGit className={`${className} text-orange-500`} />,
    'Nginx': <SiNginx className={`${className} text-green-500`} />,
    'TailwindCSS': <SiTailwindcss className={`${className} text-cyan-400`} />,
    'HTML5': <SiHtml5 className={`${className} text-orange-500`} />,
    'CSS3': <SiCss3 className={`${className} text-blue-500`} />,
  }

  return icons[name] || null
} 