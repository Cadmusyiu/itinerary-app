document.getElementById('tripForm').onsubmit = function(e){
  e.preventDefault();
  let start = new Date(document.getElementById('startDate').value);
  let end = new Date(document.getElementById('endDate').value);
  let itinDiv = document.getElementById('itinerary');
  itinDiv.innerHTML = '';
  let dayCount = (end - start)/86400000 + 1;
  for(let i=0; i<dayCount; i++){
    let day = new Date(start.getTime() + i*86400000);
    let dateStr = day.toISOString().slice(0,10);
    itinDiv.innerHTML += `<div class="day"><b>Day ${i+1}: ${dateStr}</b><br>
      <textarea placeholder="Add places & activities for Day ${i+1}" rows="3" cols="40"></textarea>
    </div>`;
  }
}
