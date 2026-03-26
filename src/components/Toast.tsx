import { useEffect } from 'react'

interface ToastProps {
  message: string
  type?: 'success' | 'error'
  onClose: () => void
}

const Toast = ({ message, type = 'success', onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={`toast ${type === 'error' ? 'toast-error' : 'toast-success'}`}
    >
      <span className="text-[1.3rem]">{message}</span>
      <button className="toast-close" onClick={onClose}>
        &#x2715;
      </button>
    </div>
  )
}

export default Toast
