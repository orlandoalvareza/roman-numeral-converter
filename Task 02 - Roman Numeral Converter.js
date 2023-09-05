function convertToRoman(num) {
    const numeralDicc = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
      };
    
      let numeral = '';
    
      let arabicNums = Object.keys(numeralDicc).sort((a, b) => b - a);
    
      for (let i = 0; i < arabicNums.length; i++) {
        let romanNum = numeralDicc[arabicNums[i]];
    
        while (num >= arabicNums[i]) {
          numeral += romanNum;
          num -= arabicNums[i];
        }
      }
      
      return numeral;
    }
    
    convertToRoman(135);