using System;
using System.Collections.Generic;
using CodingTest.Interfaces;
using EmailTemplatesWebAPIService.Model;
using Modules.Business;
using Modules.Config;

namespace CodingTest.Services
{
    public class EmailTemplateSvc  : IEmailTemplateSvc
    {

        public EmailTemplateSvc()
        {
           
         
        }
        public List<EmailTemplateModel> GetAllTemplates()
        {
            var items = EmailTemplates.GetAll(EmailSortBy.EmailLabelAscending, 1,  100, true, Modules.Config.EmailType.WelcomeEmail);
            return LocalMapper(items);
        }

        public List<EmailTemplateModel> GetAllTemplatesSorted(string columnSortBy, int pageNum, out int totalCnt)
        {
            //if (string.IsNullOrEmpty(columnSortBy))
            //    columnSortBy = "EmailLabelAscending";
            //if (pageNum == 0)
            //    pageNum = 1;

            var sortBy = Enum.Parse(typeof(EmailSortBy), columnSortBy);
            var items = EmailTemplates.GetAll((EmailSortBy)sortBy, pageNum, 10, true, Modules.Config.EmailType.WelcomeEmail);
            totalCnt = items.TotalCount;
            return LocalMapper(items);


        }
       
        private List<EmailTemplateModel> LocalMapper(List<EmailTemplate> emailTemplatesNative)
        {
            List<EmailTemplateModel> emailTemplates = new List<EmailTemplateModel>();
            foreach (var i in emailTemplatesNative)
            {
                EmailTemplateModel model = new EmailTemplateModel();
                model.EmailLabel = i.EmailLabel;
                model.FromAddress = i.FromAddress;
                model.DateUpdated = i.DateUpdated.ToShortDateString();
                emailTemplates.Add(model);
            }
            return emailTemplates;
        }
    }
}