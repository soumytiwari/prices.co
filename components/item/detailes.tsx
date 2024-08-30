export default function Detailes() {
    const details = [
        { key: 'Material Composition', value: 'Cotton Blend' },
        { key: 'Pattern', value: 'Solid' },
        { key: 'Fit Type', value: 'Regular Fit' },
        { key: 'Sleeve type', value: 'Half Sleeve' },
        { key: 'Collar style', value: 'Collarless' },
        { key: 'Length', value: 'Standard length' },
        { key: 'Fit Type', value: 'Regular Fit' },
        { key: 'Sleeve type', value: 'Half Sleeve' },
        { key: 'Collar style', value: 'Collarless' },
        { key: 'Length', value: 'Standard length' },
    ];

    // Split the details into chunks of 3 or 4 items per column
    const chunkedDetails = [];
    const chunkSize = 4; // Number of items per column
    for (let i = 0; i < details.length; i += chunkSize) {
        chunkedDetails.push(details.slice(i, i + chunkSize));
    }

    return (
        <div>
            <div style={{ fontSize: '26px', fontWeight: '600', margin: '80px 0px 20px 0px' }}>Product Details</div>
                <div style={{ fontWeight: '500', opacity: '0.8' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam repudiandae veniam odio unde corrupti quidem nulla consectetur, quibusdam accusantium incidunt ullam suscipit cum vel, numquam dolores velit quos harum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quisquam et, animi nihil obcaecati voluptatibus nisi delectus eveniet reiciendis dolores odit numquam nulla omnis accusantium blanditiis illo quos, expedita culpa?
                </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                {chunkedDetails.map((chunk, columnIndex) => (
                    <div style={{display:"flex"}}>
                        <div key={columnIndex} style={{whiteSpace:'nowrap',marginTop:'10px',marginRight:'20px'}}>
                            {chunk.map((item, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0px' }}>
                                    <span style={{ fontWeight: '600', opacity: '0.5' }}>{item.key}</span>
                                    {/* <span style={{ fontWeight: '600' }}>{item.value}</span> */}
                                </div>
                            ))}
                        </div>
                        <div key={columnIndex} style={{ whiteSpace:'nowrap',marginTop:'10px', marginRight:'100px'}}>
                            {chunk.map((item, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0px' }}>
                                    {/* <span style={{ fontWeight: '600', opacity: '0.5' }}>{item.key}</span> */}
                                    <span style={{ fontWeight: '600' }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
