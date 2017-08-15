import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';


class Ahj extends Component {
	render() {
		return (
			<div>
			
			<div>

			<Panel className="ahjMainInfo" header="Authority Having Jusrisdiction" bsStyle="primary">
				{this.props.ahj.ahj.Name}<br></br>
				{this.props.ahj.ahj.State__c}<br></br>
				{this.props.ahj.ahj.County__c}<br></br>
			</Panel>
			<br></br>

				<form onSubmit={this.props.handleSubmit}>

<Panel collapsible className="metaPanel" header="Contact Information">

						<Panel className="form" header="Building Department Address" bsStyle="info">
						{ this.props.ahj.ahj.Building_Department_Address__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleBuildingDepartmentAddressChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Building Department Contact" bsStyle="info">
						{ this.props.ahj.ahj.Building_Department_Contact__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleBuildingDepartmentContactChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="AHJ Email" bsStyle="info">
						{ this.props.ahj.ahj.AHJ_Email__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleAHJEmailChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Primary Phone Number" bsStyle="info">
						{ this.props.ahj.ahj.Primary_Phone__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handlePrimaryPhoneChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Extension" bsStyle="info">
						{ this.props.ahj.ahj.Extension__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleExtensionChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Secondary Phone Number" bsStyle="info">
						{ this.props.ahj.ahj.Secondary_Phone__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleSecondaryPhoneChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>
					
						<Panel className="form" header="Building Department Website" bsStyle="info">
						<a href={ this.props.ahj.ahj.Building_Department_Website__c}>{this.props.ahj.ahj.Building_Department_Website__c}</a>
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleBuildingDepartmentWebsiteChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Building Inspection Summary" bsStyle="info">
						{ this.props.ahj.ahj.Building_Inspection_Summary__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleBuildingInspectionSummaryChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

</Panel>
<br></br>		

<Panel collapsible className="metaPanel" header="Permit Information">

						<Panel className="form" header="Permit Scope" bsStyle="info">
						{ this.props.ahj.ahj.Permit_Scopes__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handlePermitScopesChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Permit Fee" bsStyle="info">
						{ this.props.ahj.ahj.Permit_Fee__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handlePermitFeeChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Online Permitting Required" bsStyle="info">
						{ this.props.ahj.ahj.Online_Permitting_Required__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleOnlinePermittingRequiredChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="GIS Portal Link" bsStyle="info">
						{ this.props.ahj.ahj.GIS_Portal__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleGISPortalChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Permit Approved Mean Days" bsStyle="info">
						{ this.props.ahj.ahj.Permit_Approved_Mean__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handlePermitApprovedMeanChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Permit Received Min Days" bsStyle="info">
						{ this.props.ahj.ahj.Permit_Received_Min__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handlePermitReceivedMinChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Additional Permitting Notes" bsStyle="info">
						{ this.props.ahj.ahj.Additional_Permit_Notes__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleAdditionalPermitNotesChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

</Panel>
<br></br>

<Panel collapsible className="metaPanel" header="Design Requirements">

						<Panel className="form" header="Roof Clearance Notes" bsStyle="info">
						{ this.props.ahj.ahj.Roof_Clearance_Notes__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleRoofClearanceNotesChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Planset Copies Required" bsStyle="info">
						{ this.props.ahj.ahj.Planset_Copies_Required__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handlePlansetCopiesRequiredChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

</Panel>
<br></br>

<Panel collapsible className="metaPanel" header="Inspection Information">

						<Panel className="form" header="X48 Hour Notice" bsStyle="info">
						{ this.props.ahj.ahj.X48_Hour_Notice__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleX48HourNoticeChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Electrical Inspection Notes" bsStyle="info">
						{ this.props.ahj.ahj.Electrical_Inspection_Notes__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleElectricalInspectionNotesChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

</Panel>
<br></br>

<Panel collapsible className="metaPanel" header="Fire Department & Zoning Office">

						<Panel className="form" header="Fire Marshall Contact" bsStyle="info">
						{ this.props.ahj.ahj.Fire_Marshal_Contact__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleFireMarshallContactChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Fire Department Phone Number" bsStyle="info">
						{ this.props.ahj.ahj.Fire_Department_Phone__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleFireDepartmentPhoneChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Fire Department Address" bsStyle="info">
						{ this.props.ahj.ahj.Fire_Department_Address__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleFireDepartmentAddressChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Zoning Office Phone Number" bsStyle="info">
						{ this.props.ahj.ahj.Zoning_Office_Phone__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleZoningOfficePhoneChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="Code" bsStyle="info">
						{ this.props.ahj.ahj.Code__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleCodeChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

</Panel>
<br></br>

<Panel collapsible className="metaPanel" defaultExpanded header="AHJ Overview">
						
						<Panel className="form" header="AHJ Notes" bsStyle="info">
						{ this.props.ahj.ahj.AHJ_Notes__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleAHJNotesChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

						<Panel className="form" header="AHJ Summary" bsStyle="info">
						{ this.props.ahj.ahj.AHJ_Summary__c}
						<input 
							className="input"
							type="text" 
							name="Name"
							value={this.props.value}
							onChange={this.props.handleAHJSummaryChange}
							placeholder={"Update"}
						/>
						</Panel>
						<br></br>

</Panel>
<br></br>
<br></br>

					<input type="submit" value="submit" />
				</form>

			</div>
			</div>
		)
	}
}


export default Ahj;