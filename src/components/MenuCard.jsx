import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
export default function MenuCard({image,title,text}){return <motion.article className="menu-card" whileHover={{y:-8}} transition={{duration:.25}}><img src={image} alt={title}/><div className="card-copy"><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={22}/></div></motion.article>}
