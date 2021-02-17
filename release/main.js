let projectName = 'kittenbook';
let versionNumber = '0.0.1';
let currentDate = new Date();
let currentTime = currentDate.getFullYear() + '-' + 
                    (currentDate.getMonth() + 1) + '-' + 
                    currentDate.getDate() + ' at ' +
                    currentDate.getHours() + ':' +
                    currentDate.getMinutes() + ':' +
                    currentDate.getSeconds();let userName = prompt("Hello, what's your name?")
document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' + 
                            '<p>' + projectName + ' ' + versionNumber + 
                            ' accessed on: ' + currentTime + '</p>';