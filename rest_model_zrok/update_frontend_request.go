// Code generated by go-swagger; DO NOT EDIT.

package rest_model_zrok

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// UpdateFrontendRequest update frontend request
//
// swagger:model updateFrontendRequest
type UpdateFrontendRequest struct {

	// frontend token
	FrontendToken string `json:"frontendToken,omitempty"`

	// public name
	PublicName string `json:"publicName,omitempty"`

	// url template
	URLTemplate string `json:"urlTemplate,omitempty"`
}

// Validate validates this update frontend request
func (m *UpdateFrontendRequest) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this update frontend request based on context it is used
func (m *UpdateFrontendRequest) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *UpdateFrontendRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *UpdateFrontendRequest) UnmarshalBinary(b []byte) error {
	var res UpdateFrontendRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}