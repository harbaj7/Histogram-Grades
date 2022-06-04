var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

var letterGrade = ['A+', 'A','A-','B+','B','B-','C+','C','C-','D','F' ]

//
function getGradeArray(gradeArray){
   
    var value = [];
    
    letterGrade.forEach((lg) => {
        value.push(parseFloat(document.getElementById(lg).value))
    });

    var total =[]
    gradeArray.forEach((grade) => {
        for(let i=0; i<value.length ; i++) {
            if(grade >= value[i]) {
                total.push(letterGrade[i]);
                break
                
            }
        }
    })

    return total;
}    

//
function countGrade(ar) {
    const dict = {};
    for (var i in letterGrade) {
        count = 0;
        for(var j in ar) {
            if (letterGrade[i]==ar[j]){
                count++;
            }
        }

        dict[letterGrade[i]] = count;
    }
    return dict;
}

//function that helps display histogram
function displayHistogram(dict) {
    for(var i in letterGrade){
        var temp = ''
        const c = dict[letterGrade[i]];  
        for (let k = 0; k < c; k++){ 
            temp = temp + '*';
        }
        document.getElementsByName(letterGrade[i])[0].innerHTML = temp;
    }
}

//onekeypress
function onkeypress(){


}




window.onload = (evt) =>{
    
    const arr = getGradeArray(grades);
    // console.log(arr)
    
    const dict = countGrade(arr)

    displayHistogram(dict)

    
    //update button implementation
    document.getElementById("update").onclick = function updateHistogram() {
        var newGrade = document.getElementById("number").value;

        if (newGrade != '') {
            grades.push(parseFloat(newGrade));
        }

        const arr = getGradeArray(grades);
        
        const dict = countGrade(arr)

        displayHistogram(dict)
    }
}