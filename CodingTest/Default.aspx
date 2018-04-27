<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CodingTest._Default" %>
<%@ Import Namespace="Modules.Business" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<script  type="text/javascript"  src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>

<script type="text/javascript" src='@Url.DatedContent("~/ControllerViewModels/EmailTemplateController.js")'></script>
<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>OPM Web Team Coding Test</title>
    <script type="text/javascript">
 
            $(document).ready(function() {
                new EmailTemplateController().init();
            });
 
        </script>
</head>
<body>
    <form id="form1" runat="server">
        
    <div  > 
		<%--
		Note: This coding example was taken from a third party resource. The purpose of the coding test is to see how a 
		developer will take an unfamiliar code base and convert it to client server application using any MV* approach.
		
		Please attempt to accomplish the following three items:
		
		1. Convert the code base to use any MV*/MVC approach.
		
		2. Create a simple table that outputs Email Label, From Address, and Date Updated from the items within the 
			Modules.Business.EmailTemplates class.  
		
		3. Allow the table to be displayed in a paged fashion, showing 10 items per page.
		
		4. Allow the column headers to order the page items differently when clicked.
		
		Please try to accomplish each of these three elements.  If you get stuck on either # 2 or # 3, please simply describe what
		you are trying to accomplish rather than spending too much time.
		--%>
    </div>
        <div >
            <asp:GridView ID="GridView1" runat="server"></asp:GridView>
        </div>
    </form>
</body>
</html>
