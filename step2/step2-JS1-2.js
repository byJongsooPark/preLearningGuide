
      function arrayMin(arr) {
        var len = arr.length, min = arr[0];
        while (len--) {
          if (arr[len] < min) {
            min = arr[len];
          }
        }
        return min;
      };

      function arrayMax(arr) {
        var len = arr.length, max = arr[0];
        while (len--) {
          if (arr[len] > max) {
            max = arr[len];
          }
        }
        return max;
      };

      var array = ['a', 'b', 'C'];

      console.log('최댓값 : ' + arrayMax(array));


      console.log('최솟값 : ' + arrayMin(array));





// Biggest Number 
