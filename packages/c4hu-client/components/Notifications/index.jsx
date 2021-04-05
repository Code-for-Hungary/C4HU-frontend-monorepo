import { notification } from 'antd';
import useAlerts from '../../ducks/useAlerts';

const Notifications = ({ alerts }) => {
  const { dismissAlert } = useAlerts()

  alerts?.forEach?.(({ id, type, description, ...rest }) => {
    notification[type || 'error']?.({
      key: id,
      placement: 'topLeft',
      duration: 8,
      onClose: () => dismissAlert(id),
      description,
      ...rest
    })
  })

  return null
}

export default Notifications
