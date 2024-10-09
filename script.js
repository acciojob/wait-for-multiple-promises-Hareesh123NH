//your JS code here. If required.
function getRandomTime(min, max) {
        return (Math.random() * (max - min + 1) + min).toFixed(3);
}
function getPromise() {
	return new Promise((res,rej)=>{
	const time=getRandomTime(1,3);
	setTimeout(()=>{
			res(time);
		},time*1000);
	});
}
const p1=getPromise();
const p2=getPromise();
const p3=getPromise();

const arr=[p1,p2,p3];

const startTime=performance.now();

Promise.all(arr).then((res)=>{
	const loading=document.getElementById("loading");
	if(loading) loading.remove();

	const tbody=document.getElementById("output");
	res.forEach((r,i)=>{
		const row = document.createElement('tr');
        row.innerHTML = `<td>Promise ${i+1}</td><td>${r}</td>`;
        tbody.appendChild(row);
	});	  
	
	const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);
	const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
	tbody.appendChild(totalRow);
});




