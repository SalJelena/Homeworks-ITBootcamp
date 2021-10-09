/**--------------------
Nacrtati dijamant kao na primeru:

     *
    ***
   *****
  *******
 *********
  *******
   *****
    ***
     *


 ---------------------*/


 {

    let N = 5
    

    for(let i = 1; i<=N; i++){
        console.log(' '.repeat(N-i) + '*'.repeat((i*2)-1))
    }    
    for(let i = 1; i<N; i++){
        console.log(' '.repeat(i) + '*'.repeat((2*(N-i)-1)))
    }

}

