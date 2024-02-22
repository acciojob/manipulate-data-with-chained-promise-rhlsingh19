function manipulateData(inputArray) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(inputArray);
        }, 3000);
      }).then((array) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const evens = array.filter(num => num % 2 === 0);
            document.getElementById('output').innerText = evens.join(', ');
            resolve(evens);
          }, 1000);
        });
      }).then((evens) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const doubled = evens.map(num => num * 2);
            document.getElementById('output').innerText = doubled.join(', ');
            resolve(doubled);
          }, 2000);
        });
      });
    }

    const inputArray = [1, 2, 3, 4];
    manipulateData(inputArray);