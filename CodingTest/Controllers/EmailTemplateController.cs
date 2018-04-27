using CodingTest.Interfaces;
using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Mvc;
using System.Net;

namespace CodingTest.Controllers
{
    public class EmailTemplateController : APIEmailTemplateController1
    {

        
        public EmailTemplateController(IEmailTemplateSvc _emailTemplateSvc) :base(_emailTemplateSvc)
        {
           
        }
        public JsonResult GetAll()
        {


            return new JsonResult() { Data = GetAllEmailTemplates(), JsonRequestBehavior = JsonRequestBehavior.DenyGet };
        }
    }
}