using System;
using System.Collections.Generic;
using System.Web;
using CodingTest.Interfaces;
using Modules.Business;
using Modules.Config;

namespace CodingTest.Services
{
    public class EmailTemplateSvc  : IEmailTemplateSvc
    {

        public EmailTemplateSvc()
        {
           
         
        }
        public EmailTemplates GetAllTemplates()
        {
            return EmailTemplates.GetAll(EmailSortBy.EmailLabelAscending,1,  10, true, Modules.Config.EmailType.WelcomeEmail);
           
        }

        public EmailTemplates GetAllTemplatesSorted(string columnSortBy)
        {
            EmailSortBy sortBy = EmailSortBy.EmailLabelAscending;
            switch (columnSortBy)
            {
                case "EmailLabelDescending":
                    sortBy = EmailSortBy.EmailLabelDescending;
                    break;
            }
            return EmailTemplates.GetAll(sortBy, 1, 10, true, Modules.Config.EmailType.WelcomeEmail);

        }
    }
}