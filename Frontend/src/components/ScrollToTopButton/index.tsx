import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

const ScrollToTopButton = () => {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
    
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  
  return (

    <button 
        onClick={scrollToTop} 
        aria-label="Voltar ao topo"
        className={`fixed bottom-4 right-4 bg-gray-900 hover:bg-gray-800 rounded-2xl 
        cursor-pointer z-50 transition ${visible ? " opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}>
            <ArrowUp className="text-gray-400 h-6 w-6"/>
    </button>
        
  )
};

export default ScrollToTopButton;
