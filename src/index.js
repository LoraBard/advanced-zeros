module.exports = function getZerosCount(number, base) {
  let arr=[],obj={},exponent=0,sum=0,key_new,min,system=base,num=number;
    for(let j=2;j<=base;++j)
    {
        if(system%j===0)
        {
            while(system%j===0)
            {
              system/=j;
                ++exponent;
            }
            obj[j]=exponent;
            exponent=0;
        }
    }
    for(let key in obj)
    {
        key_new=+key;
        while(num>1)
        {
            num=number;
            num/=key_new;
            num=Math.floor(num);
            sum+=num;
            key_new*=+key;

        }
        arr.push(Math.floor(sum/obj[key]));
        num=number;
        sum=0;
    }
    min=arr[0];
    for(let p=1;p<arr.length;++p)
    {
        if(arr[p]<min)
        {
            min=arr[p];
        }
    }
    return min;
}