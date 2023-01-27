const array = [2, 6, 7, 1, 10, 22, 5];

/**
 *
 * @param {Array<number> , k: number } 
 * @return {{ divisiblePairs : number}}
 */



function findDivisblePairs(array , k){
    let pairsNo = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) % k == 0)
                pairsNo++
        }
    }

    return pairsNo;
}
