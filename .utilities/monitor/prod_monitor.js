const apiMonitor = require('./apimonitor.js');

process.stdout.write("Waiting for RBP to turn on");

apiMonitor.checkForLife('https', 'https://restful-booker-platform.sdet.school', '/booking/');
apiMonitor.checkForLife('https', 'https://restful-booker-platform.sdet.school', '/room/');
apiMonitor.checkForLife('https', 'https://restful-booker-platform.sdet.school', '/branding/');
apiMonitor.checkForLife('https', 'https://restful-booker-platform.sdet.school', '/');
apiMonitor.checkForLife('https', 'https://restful-booker-platform.sdet.school', '/auth/');
apiMonitor.checkForLife('https', 'https://restful-booker-platform.sdet.school', '/report/');
apiMonitor.checkForLife('https', 'https://restful-booker-platform.sdet.school', '/message/');