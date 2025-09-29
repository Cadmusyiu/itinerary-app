document.getElementById('tripForm').onsubmit = async function(e){
  e.preventDefault();
  let destination = document.getElementById('destination').value;
  let start = new Date(document.getElementById('startDate').value);
  let end = new Date(document.getElementById('endDate').value);
  let remarks = document.getElementById('remarks').value;
  let itinDiv = document.getElementById('itinerary');
  itinDiv.innerHTML = '<em>Generating itinerary...</em>';
  let dayCount = Math.round((end - start) / 86400000) + 1;
  // Demo: simple AI mockup for each day
  setTimeout(() => {
    let out = `<h2>Suggested Itinerary for ${destination}</h2>`;
    for(let i = 0; i < dayCount; i++){
      let day = new Date(start.getTime() + i * 86400000);
      let dateStr = day.toDateString();
      out += `<div class="day"><b>Day ${i+1} (${dateStr}):</b><br>
      Suggested: Explore top attractions, <em>${remarks || 'your chosen interests'}</em>.<br>
      <textarea rows="2" cols="60" placeholder="Your notes/edits"></textarea></div>`;
    }
    itinDiv.innerHTML = out;
  }, 1200);
}
