
export default function Detailes() {
    const details = [
        {
            key:'Material Composition',
            value:'Cotton Blend'
        },
        {
            key:'Pattern',
            value:'Solid'
        },
        {
            key:'Fit Type',
            value:'Regular Fit'
        },
        {
            key:'Sleeve type',
            value:'Half Sleeve'
        },
        {
            key:'Collar style',
            value:'Collarless'
        },
        {
            key:'Length',
            value:'Standard length'
        },
        {
            key:'Fit Type',
            value:'Regular Fit'
        },
        {
            key:'Sleeve type',
            value:'Half Sleeve'
        },
        {
            key:'Collar style',
            value:'Collarless'
        },
        {
            key:'Length',
            value:'Standard length'
        },
    ]
    return(
        <div>
            <div style={{fontSize:'26px', fontWeight:'600', margin:'80px 0px 20px 0px'}}>Product Detailes</div>
            <div style={{display:"flex"}}>
            <div style={{width:'15em'}}>
                {
                   details.map((item, indx)=>{
                    return(
                        <div key={indx} style={{display:"flex", alignItems:"center", justifyContent:"space-between", margin:'20px 0px'}}>
                            <span style={{fontWeight:'600'}}>{item.key}</span>
                            {/* <span style={{justifyItems:}}>{item.value}</span> */}
                        </div>
                    )
                   })
                }
            </div>
            <div>
                {
                   details.map((item, indx)=>{
                    return(
                        <div key={indx}style={{display:"flex", alignItems:"center", justifyContent:"space-between", margin:'20px 0px'}}>
                            {/* <span style={{fontWeight:'500'}}>{item.key}</span> */}
                            <span style={{fontWeight:'300'}}>{item.value}</span>
                        </div>
                    )
                   })
                }

            </div>
            </div>
            
        </div>
    )
}