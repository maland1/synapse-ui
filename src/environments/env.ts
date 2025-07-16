
const hostUrl = window.location.hostname;

export const environment = getEnvironment(hostUrl);

function getEnvironment(hostname: string): string {
  hostname.replace('https://', '');

  switch(hostname) {
    case 'localhost':
      return 'dev';
    case 'synapse':
      return 'prod';
    default:
      return 'dev';
  }
}