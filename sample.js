export default function Sample({a,b,c}){
    function sums(){
        a=parseInt(a);
        b=parseInt(b);
        c=parseInt(c);
        return(a+b+c);

    }

     return(
         <p>sums is {a}+{b}+{c} is {sums()}</p>
     );
}
