using CodingTest.Interfaces;
using CodingTest.Services;
using Modules.Business;
using System.Collections;
using System.Collections.Generic;
using System.Web.Http;

namespace EmailTemplatesWebAPIService.Controllers
{
    public class EmailTemplateController : ApiController
    {
        // protected IEmailTemplateSvc _emailTemplateSvc;

        //public EmailTemplateController(IEmailTemplateSvc emailTemplateSvc)
        //{
        //    _emailTemplateSvc = emailTemplateSvc;
        //}

        public IEnumerable<EmailT> GetAllEmailTemplates()
        {
            EmailTemplateSvc _emailTemplateSvc = new EmailTemplateSvc();

            List<EmailT> EmailTemplatesList = new List<EmailT>();
           
            
            var items = _emailTemplateSvc.GetAllTemplates();
            foreach(var i in items )
            {
                EmailT et = new EmailT();
                et.FromAddress = i.FromAddress;
                et.Subject = i.Subject;
                EmailTemplatesList.Add(et);
            }
            // return _emailTemplateSvc.GetAllTemplates();

            return EmailTemplatesList;
        }

        public IEnumerable<EmailT> GetAllEmailTemplatesSorted(string columnSortBy)
        {
            EmailTemplateSvc _emailTemplateSvc = new EmailTemplateSvc();

            List<EmailT> EmailTemplatesList = new List<EmailT>();


            var items = _emailTemplateSvc.GetAllTemplatesSorted(columnSortBy);
            foreach (var i in items)
            {
                EmailT et = new EmailT();
                et.FromAddress = i.FromAddress;
                et.Subject = i.EmailLabel;
                EmailTemplatesList.Add(et);
            }
            // return _emailTemplateSvc.GetAllTemplates();

            return EmailTemplatesList;
        }
    }

    public class EmailT
    {
        public string Subject { get; set; }
        public string FromAddress { get; set; }
    }
}
