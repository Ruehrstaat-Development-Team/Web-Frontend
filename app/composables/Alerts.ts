import { v4 as uuid } from "uuid";

const alerts = ref<Alert[]>([] as Alert[]);
const alertQueue = ref<Alert[]>([] as Alert[]);
var alertInterval: NodeJS.Timeout | undefined;

export const useAlerts = () => {
  const AlertService: AlertService = {
    addAlert: (alert: Alert) => {
      alert.id = uuid();
      alert.time_added = Date.now().valueOf();
      alert.progress = alert.ttl * 1000;
      if (!alertInterval) {
        alertInterval = setInterval(() => {
          alerts.value.forEach((alert) => {
            alert.progress =
              alert.ttl * 1000 - (Date.now().valueOf() - alert.time_added);
          });
        }, 10);
      }

      if (alerts.value.length >= 5) {
        alertQueue.value.push(alert);
      } else {
        alert.removeTimeout = setTimeout(() => {
          AlertService.removeAlert(alert);
        }, alert.ttl * 1000);
        alerts.value.push(alert);
      }
    },

    removeAlert: (alert: Alert) => {
      clearTimeout(alert.removeTimeout);
      alerts.value.splice(alerts.value.indexOf(alert), 1);

      if (alertQueue.value.length > 0) {
        var queuedAlert = alertQueue.value[0];
        queuedAlert.time_added = Date.now().valueOf();
        queuedAlert.removeTimeout = setTimeout(() => {
          AlertService.removeAlert(queuedAlert);
        }, queuedAlert.ttl * 1000);
        alerts.value.push(queuedAlert);
        alertQueue.value.splice(0, 1);
      }

      if (alerts.value.length === 0) {
        clearInterval(alertInterval);
        alertInterval = undefined;
      }
    },
  };
  return { alerts, AlertService };
};
