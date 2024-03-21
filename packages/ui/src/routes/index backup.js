import { useRoutes } from 'react-router-dom'

// routes
import MainRoutes from './MainRoutes backup'
import CanvasRoutes from './CanvasRoutes backup'
import ChatbotRoutes from './ChatbotRoutes backup'
import config from 'config'

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, CanvasRoutes, ChatbotRoutes], config.basename)
}
