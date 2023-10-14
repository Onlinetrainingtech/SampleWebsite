function Sample(x,y)
{
    if(x>y)
    {
        console.warn(`${x} is greater than ${y}`)
    }
    else
    {
        console.warn(`${x} is less than or equal to ${y}`)
    }
}
x=100
y=50
Sample(x,y)